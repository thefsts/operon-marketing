const addOns = [
  { name: 'Social Publisher Pro', price: '$49/mo', description: 'Manage all your social media in one place.', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=700&q=82', href: '/social-publisher-pro' },
  { name: 'Geofence Marketing', price: 'From $1,000', description: 'Target customers by location.', image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=700&q=82', href: '/geofence' },
  { name: 'Reputation Management', price: '$49/mo', description: 'Turn reviews into revenue.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=82', href: '/reputation-management' },
  { name: 'Lead Generation', price: 'From $59/mo', description: 'Find and convert more customers.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=82', href: '/lead-generation' },
  { name: 'Email Marketing Pro', price: '$29/mo', description: 'Advanced email campaigns and automation.', image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=700&q=82', href: '/platform' },
  { name: 'Integrations Plus', price: '$39/mo', description: 'Connect more tools and expand your workflow.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=82', href: '/integrations' },
];

export default function AddOnsSection() {
  return <section className="text-left">
    <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><h2 className="text-2xl font-bold tracking-tight text-slate-950">Add-Ons to Do More</h2><p className="mt-1 text-sm text-slate-600">Enhance your OPERON experience with the tools you need. Only pay for what you use.</p></div><a href="/add-ons" className="shrink-0 text-sm font-semibold text-sky-600 hover:text-sky-800">View All Add-Ons →</a></div>
    <div className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{addOns.map((addon)=><article key={addon.name} className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><div className="aspect-[16/8] overflow-hidden bg-slate-100"><img src={addon.image} alt="" loading="lazy" className="h-full w-full object-cover"/></div><div className="flex flex-1 flex-col p-3"><h3 className="text-sm font-bold text-slate-950">{addon.name}</h3><p className="mt-1 flex-1 text-xs leading-5 text-slate-600">{addon.description}</p><p className="mt-2 text-lg font-bold text-slate-950">{addon.price}</p><a href={addon.href} className="mt-1 text-xs font-semibold text-sky-600 hover:text-sky-800">Learn More →</a></div></article>)}</div>
  </section>;
}
