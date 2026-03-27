import PageTemplate from "@/components/PageTemplate";

export default function WeddingPage() {
  const subPages = [
    { name: "Our Story", href: "/life/wedding/story" },
    { name: "Event Info", href: "/life/wedding/event" },
    { name: "RSVP", href: "/life/wedding/rsvp" },
  ];

  return (
    <PageTemplate title="Save the Date" theme="romantic" subPages={subPages}>
      <section className="text-center">
        <p className="text-2xl italic text-rose-800 font-serif">
          "捕捉生活中的溫柔瞬間，直到我們共同白頭。"
        </p>
        <div className="mt-12 space-y-6">
          <p className="text-3xl font-light tracking-widest text-gray-800">2026.03.27</p>
          <div className="w-12 h-[1px] bg-rose-200 mx-auto" />
          <p className="text-lg text-rose-700/80 tracking-wide">Taipei, Taiwan</p>
        </div>
      </section>
    </PageTemplate>
  );
}
