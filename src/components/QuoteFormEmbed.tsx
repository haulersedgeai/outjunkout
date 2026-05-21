"use client";

import Script from "next/script";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function QuoteFormEmbed({
  className,
  height = 600,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <div className={cn("w-full rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-black/5", className)}>
      <iframe
        src={site.ghl.embedSrc}
        style={{
          width: "100%",
          height: `${height}px`,
          border: "none",
          borderRadius: "0.5rem",
          display: "block",
        }}
        id={`inline-${site.ghl.formId}`}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={site.ghl.formName}
        data-height={height.toString()}
        data-layout-iframe-id={`inline-${site.ghl.formId}`}
        data-form-id={site.ghl.formId}
        title={site.ghl.formName}
      />
      <Script src={site.ghl.embedScript} strategy="lazyOnload" />
    </div>
  );
}
