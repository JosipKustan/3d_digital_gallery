import { formatRate, QUOTE_NOTE, VAT_NOTE } from "../../data/siteContent";
import { RateList, RatePrice, RateRow } from "./StaticStyles";

// Renders entries from HOURLY_RATES, always followed by the VAT and quote notes.
// showNkd adds the registered activity codes (used on the legal page).
export default function HourlyRates({ rates, showNkd = false }) {
  return (
    <>
      <RateList>
        {rates.map(({ id, service, nkd, rate, note }) => (
          <RateRow key={id}>
            <div>
              <strong>{service}</strong>
              <p>{note}</p>
              {showNkd && <p>NKD 2025: {nkd.join(", ")}</p>}
            </div>
            <RatePrice>{formatRate(rate)}</RatePrice>
          </RateRow>
        ))}
      </RateList>
      <p>{VAT_NOTE}</p>
      <p>{QUOTE_NOTE}</p>
    </>
  );
}
