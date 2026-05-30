'use client';

export default function Clients() {
  const clients = [
    'POLDA JABAR',
    'KEMENHAN',
    'PT WASKITA',
    'BRIMOB',
    'PT ANTAM',
    'KOPASSUS',
  ];

  return (
    <section id="clients" className="border-b border-border">
      <div className="container py-10">
        <div className="flex items-center gap-10 flex-wrap">
          <div className="text-xs font-medium uppercase tracking-wider text-text-tertiary whitespace-nowrap pr-10 border-r border-border">
            Dipercaya oleh
          </div>
          <div className="flex items-center gap-10 flex-wrap">
            {clients.map((client) => (
              <div
                key={client}
                className="font-syne font-bold text-sm text-charcoal opacity-35 hover:opacity-60 transition-opacity"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
