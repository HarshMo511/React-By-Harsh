import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p style={{ color: "white", textAlign: "center" }}>
        <Link href="/meals" style={{ color: "white", textAlign: "center" }}>
          Meals
        </Link>
      </p>
      <p style={{ color: "white", textAlign: "center" }}>
        <Link
          href="/meals/share"
          style={{ color: "white", textAlign: "center" }}
          >
          Share Meals
        </Link>
          </p>
      <p style={{ color: "white", textAlign: "center" }}>
        <Link
          href="/community"
          style={{ color: "white", textAlign: "center" }}
          >
          Community
        </Link>
          </p>
    </main>
  );
}
