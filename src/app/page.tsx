import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Launch plan to live execution in one week",
    body: "You tell us the offer, audience, and goal. We map threads, draft replies, and start posting fast.",
  },
  {
    title: "Replies that sound local, not translated",
    body: "We match each subreddit tone and context. Your team shows up helpful and credible from day one.",
  },
  {
    title: "One report that ties comments to outcomes",
    body: "Get weekly updates you can drop in Slack with clicks, signups, and top conversations that moved the needle.",
  },
];

const launchFlow = [
  "Share your product story and target customers",
  "Approve thread targets and English response style",
  "We post through browser agents and monitor outcomes daily",
  "You get clean weekly insights with what to double down on",
];

export default function HomePage() {
  return (
    <main>
      <section className="w-full px-6 pb-24 pt-24 text-center sm:px-12 sm:pb-28 sm:pt-32">
        <div className="container-shell">
          <p className="mono text-[13px] uppercase tracking-[0.12em] muted">ButterGrow</p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl">
            Get Your AI Startup Into the Right Reddit Threads
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[17px] muted sm:text-[18px]">
            Chinese AI teams move fast. US social channels do not forgive awkward copy. ButterGrow helps you find high-intent
            Reddit and X conversations, reply in natural English, and track what drives real traffic.
          </p>

          <div className="mx-auto mt-10 w-full max-w-2xl panel p-5 sm:p-6">
            <p className="mb-4 text-[14px] muted">Enter your work email and get early access details.</p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section className="container-shell py-24 text-center sm:py-28">
        <div className="panel p-8 sm:p-10">
          <p className="mono text-[13px] uppercase tracking-[0.1em] muted">
            Positioning
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Built between two worlds</h2>
          <p className="mx-auto mt-5 max-w-3xl text-[17px] muted">
            Most teams pick one side. A US growth agency that cannot work in Mandarin, or a local partner that cannot sound
            native in US communities. ButterGrow sits in the middle. Founder communication in Mandarin. Execution in English
            that feels right for Reddit and X.
          </p>
        </div>
      </section>

      <section className="container-shell py-24 sm:py-28">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">What you get in the launch package</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] muted">
            Focused Reddit execution starts at <span className="mono">$3,000 to $5,000/month</span>. Multi-channel support is
            available when you are ready for more volume.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {valueProps.map((item) => (
            <article key={item.title} className="panel p-6 text-center">
              <h3 className="text-2xl">{item.title}</h3>
              <p className="mt-3 text-[15px] muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-24 text-center sm:py-28">
        <h2 className="text-3xl sm:text-4xl">How a launch starts</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {launchFlow.map((step, index) => (
            <article key={step} className="panel p-6">
              <p className="mono text-[13px] muted">Step {index + 1}</p>
              <p className="mt-2 text-[16px]">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24 pt-20 text-center sm:pb-28 sm:pt-24">
        <div className="panel p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl">Ready to test your US channel fit?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] muted">
            Join the waitlist and we will share launch examples, timelines, and whether ButterGrow fits your goals.
          </p>
          <div className="mx-auto mt-8 w-full max-w-2xl">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <footer className="px-6 pb-12 text-center text-[13px] muted sm:px-12">
        Built with Boring Combinator
      </footer>
    </main>
  );
}
