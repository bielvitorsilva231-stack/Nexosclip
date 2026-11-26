import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowUpRight, ImageIcon, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { products } from "../data/products";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[680px] px-4 sm:px-5">
      <main>
        <header className="brand text-center">
          <Image src="/icon.svg" width={106} height={106} alt="" className="brand-mark mx-auto" />
          <h1>NEXUS CLIP</h1>
          <span className="brand-rule" aria-hidden="true" />
          <p>Seu próximo upgrade começa aqui.</p>
        </header>

        <section aria-labelledby="products-heading">
          <h2 id="products-heading" className="section-title flex items-center">Achadinhos gamer</h2>
          <ul className="grid gap-3.5 sm:gap-4">
            {products.map((product) => {
              const hasPhoto = existsSync(join(process.cwd(), "public", "products", product.file));

              return (
                <li key={product.file}>
                  <a className="product-card grid items-center" href={product.url}
                    target="_blank" rel="sponsored noopener noreferrer">
                    <div className="product-media grid aspect-square place-items-center">
                      {hasPhoto ? (
                        <Image src={`/products/${product.file}`} alt={product.alt} width={320}
                          height={320} className="size-full object-contain" />
                      ) : (
                        <ImageIcon aria-hidden="true" size={28} strokeWidth={1.35} />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3>{product.name}</h3>
                      <div className="product-details flex flex-wrap items-center">
                        <span className="inline-flex items-center gap-1.5">
                          <ShoppingBag size={17} aria-hidden="true" /> Shopee
                        </span>
                        <span className="product-action inline-flex items-center gap-1">
                          Ver produto <ArrowUpRight size={17} aria-hidden="true" />
                          <span className="sr-only"> (abre em nova aba)</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <footer className="footer text-center">Nexus Clip</footer>
    </div>
  );
}
