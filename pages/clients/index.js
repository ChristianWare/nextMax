import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximillion" },
    { id: "mary", name: "Christian" },
    { id: "charles", name: "Charles" },
    { id: "dave", name: "Dave" },
    { id: "andrew", name: "Andrew" },
    { id: "matt", name: "Matt" },
    { id: "steph", name: "Steph" },
    { id: "klay", name: "Klay" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
