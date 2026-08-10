import { site } from "@/lib/site";

export default function MobileCta() {
  return (
    <div className="mobilecta">
      <a href={`${site.lpPath}#book`} className="btn">
        Book a free consultation
      </a>
    </div>
  );
}
