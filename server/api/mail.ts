import nodemailer from "nodemailer";

const NAME_LENGTH_ERROR = "Name must be atleast 2 characters long";
const INVALID_EMAIL_ERROR = "Please enter a valid email";
const MESSAGE_LENGTH_ERROR =
  "Please enter a message that has atleast 20 characters";

const MAIL_REG_EXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type ArgumentError = { [key in "name" | "email" | "message"]?: string };

export default defineEventHandler(async (event) => {
  const { name, message, email } = await useBody(event);

  let errors: ArgumentError = {};

  if (name.length < 3) errors.name = NAME_LENGTH_ERROR;
  if (!MAIL_REG_EXP.test(email)) errors.email = INVALID_EMAIL_ERROR;
  if (message.length < 20) errors.message = MESSAGE_LENGTH_ERROR;

  if (Object.keys(errors).length) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid request",
        data: errors,
      })
    );
  }

  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    service: config.mailService,
    auth: {
      user: config.mailFrom,
      pass: config.mailAppPassword,
    },
  });

  const info = await transporter.sendMail({
    to: config.mailTo,
    subject: "Email submission markschuurmans.nl",
    html: `
      <html>
        <head>
          <style>*{margin:0}</style>
        </head>
        <body style="background-color: #fafafa; padding: 3rem 5rem;">
          <div style="padding: 1.5rem; background: white">
            <svg style="width: 3rem" viewBox="0,0,400,400"><path d="M260.881 72.516 C 250.525 93.531,242.051 112.199,242.051 114.003 C 242.051 117.628,357.186 348.718,358.992 348.718 C 359.614 348.718,368.712 331.334,379.210 310.086 L 398.299 271.455 339.005 152.882 L 279.712 34.309 260.881 72.516 M101.806 75.362 L 82.565 113.802 141.282 231.260 C 173.577 295.862,200.481 348.718,201.069 348.718 C 201.657 348.718,210.754 331.409,221.285 310.253 L 240.432 271.789 228.217 247.176 C 181.768 153.586,122.847 36.923,122.028 36.923 C 121.488 36.923,112.388 54.221,101.806 75.362 M22.882 233.174 L 3.764 271.477 22.846 310.097 C 33.342 331.339,42.444 348.718,43.073 348.718 C 43.702 348.718,52.780 331.410,63.245 310.256 L 82.274 271.795 63.278 233.333 C 52.831 212.179,43.769 194.872,43.141 194.872 C 42.514 194.872,33.397 212.108,22.882 233.174"></path></svg>
            <p style="padding: 1.5rem 0 1rem 0; font-weight: bold;">email from ${name},</p>
            <div style="color: rgba(0,0,0,0.87)">
              <p>${message}</p>
              <p style="padding-top: 1.5rem; font-style: italic;">email: ${email},</p>          
            </div>
          </div>
        </body>
      </html>`,
  });

  return { info };
});
