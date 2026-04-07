import { siteConfig } from "@/data/site";

export function BookingFrame() {
  return (
    <div className="surface-outline overflow-hidden p-2">
      <iframe
        title="Book a demo with Anchor Systems"
        src={siteConfig.bookingLink}
        className="min-h-[760px] w-full rounded-[24px] border-0 bg-white"
      />
    </div>
  );
}
