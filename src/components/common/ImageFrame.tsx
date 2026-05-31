"use client";

import { useEffect, useState } from "react";
import { PlaceholderSpeciesImage } from "@/components/illustrations/PlaceholderSpeciesImage";

interface ImageFrameProps {
  src: string;
  nome: string;
  className?: string;
}

export function ImageFrame({ src, nome, className = "" }: ImageFrameProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Sempre que a URL mudar, tentamos carregar novamente.
    setHasError(false);
  }, [src]);

  if (!src || hasError) {
    return <PlaceholderSpeciesImage nome={nome} className={className} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`Imagem da espécie ${nome}`}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
