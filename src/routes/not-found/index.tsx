import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { SendMailIcon } from "~/components/icon/send-mail-icon";
import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button";
import { CodeIcon } from "~/components/icon/code-icon";
import { DesignIcon } from "~/components/icon/design-icon";

export default component$(() => {
  return (
    <>
      <div class="flex h-full flex-col justify-center self-center pb-8 pt-8 text-center">
        <h1 class="mx-auto max-w-[16ch] text-7xl font-bold leading-[0.95]">
          Page not found
        </h1>
        <p class="mx-auto max-w-[42ch] pt-8 text-xl text-foreground-muted">
          Hi I am Mark, a{" "}
          {/* TODO link to projects related to software development */}
          <Link href="/" class="text-semibold text-orange-300">
            <CodeIcon class="inline w-5 text-orange-300" /> Software Developer
          </Link>{" "}
          with an eye for
          {/* TODO link to projects related to UI design */}
          <Link href="/" class="font-semibold text-blue-500">
            <DesignIcon class="inline w-5" /> UI design
          </Link>
          . I am specialized in UI/UX design and responsive web development.
        </p>

        <div class="mt-6">
          <Button href="/projects" size="lg">
            View projects
          </Button>
          <Button href="/projects" variant="secondary" size="lg" class="ml-2">
            Contact
            <SendMailIcon class="h-5 pl-2" />
          </Button>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Not found",
};
