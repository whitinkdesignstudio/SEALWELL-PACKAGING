'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface ProductCategory {
  id: string;
  num: string;
  title: string;
  description: string;
  secondaryText?: string;
  images: { src: string; alt: string; label: string }[];
  layout: 'left-image' | 'right-image' | 'wide-showcase' | 'collage';
  features?: string[];
}

const PRODUCTS_DATA: ProductCategory[] = [
  {
    id: 'product-01',
    num: '01',
    title: 'Pharmaceutical Vial / Serum Rubber Stoppers',
    description:
      'We manufacture high-quality rubber stoppers for pharmaceutical and allied industries, with extensive experience in rubber product manufacturing since 1995. Our products are available in different materials, sizes and colours and can also be customized according to specific customer requirements.',
    images: [
      {
        src: '/assets/product img/3.jpeg',
        alt: 'Pharmaceutical vial rubber stoppers top and bottom view',
        label: 'Vial Rubber Stopper Pair',
      },
      {
        src: '/assets/product img/6.jpeg',
        alt: 'Precision serum rubber stoppers stack',
        label: 'Stack View & Finish',
      },
      {
        src: '/assets/product img/5.jpeg',
        alt: 'Pharmaceutical stoppers batch inspection',
        label: 'Batch Consistency',
      },
    ],
    layout: 'left-image',
  },
  {
    id: 'product-02',
    num: '02',
    title: 'Lyophilization / Special Design Rubber Stoppers',
    description:
      'Our rubber stoppers are suitable for a wide range of pharmaceutical, healthcare, laboratory, chemical and industrial applications, particularly where reliable sealing and product compatibility are required.',
    secondaryText:
      'We offer customized rubber stopper manufacturing based on customer specifications.',
    images: [
      {
        src: '/assets/product img/2.jpeg',
        alt: 'Lyophilization slotted rubber stoppers',
        label: '2-Leg Slotted Design',
      },
      {
        src: '/assets/product img/4.jpeg',
        alt: 'Special design freeze-drying rubber stoppers',
        label: 'Freeze-Drying Geometry',
      },
    ],
    layout: 'right-image',
  },
  {
    id: 'product-03',
    num: '03',
    title: 'Bottle / Industrial Rubber Stoppers',
    description:
      'Our rubber stoppers are suitable for a wide range of pharmaceutical, healthcare, laboratory, chemical and industrial applications, particularly where reliable sealing and product compatibility are required.',
    secondaryText:
      'Our products are available in different materials, sizes and colours and can also be customized according to specific customer requirements.',
    images: [
      {
        src: '/assets/product img/7.jpeg',
        alt: 'Industrial bottle rubber stoppers thick flange',
        label: 'Industrial Bottle Seal',
      },
      {
        src: '/assets/product img/8.jpeg',
        alt: 'Heavy duty dark grey rubber stoppers',
        label: 'Thick Flange Profile',
      },
    ],
    layout: 'wide-showcase',
  },
  {
    id: 'product-04',
    num: '04',
    title: 'Customized Rubber Stoppers',
    description:
      'We offer customized rubber stopper manufacturing based on customer specifications. Customized sizes, dimensions, colours, materials and designs can be developed as per sample, drawing or specific application requirements.',
    images: [
      {
        src: '/assets/product img/1.jpeg',
        alt: 'Colourful red and custom rubber stoppers',
        label: 'Red & Colour Variants',
      },
      {
        src: '/assets/product img/9.jpeg',
        alt: 'Specialty plunger rubber stoppers design',
        label: 'Precision Plunger Profile',
      },
      {
        src: '/assets/product img/10.jpeg',
        alt: 'Dome top customized rubber stoppers',
        label: 'Custom Slotted Dome',
      },
    ],
    layout: 'collage',
  },
];

const TECHNICAL_SPECS = {
  sizes: ['13 mm', '20 mm', '25 mm', '28 mm', '30 mm', '32 mm', '33 mm'],
  materials: [
    'Butyl Rubber',
    'Bromobutyl Rubber',
    'Neoprene Rubber',
    'Chlorobutyl Rubber',
  ],
  colours: [
    'Grey',
    'Dark Grey',
    'Red',
    'Custom colours available as per requirement',
  ],
};

const CUSTOM_TAGS = [
  'SIZE',
  'DIMENSION',
  'COLOUR',
  'MATERIAL',
  'DESIGN',
  'SAMPLE',
  'DRAWING',
];

// Shared image viewer card
function ImageCard({
  currentImg,
  images,
  productId,
  activeIndex,
  onClickFull,
  onSelectThumb,
}: {
  currentImg: { src: string; alt: string };
  images: { src: string; alt: string; label: string }[];
  productId: string;
  activeIndex: number;
  onClickFull: () => void;
  onSelectThumb: (idx: number) => void;
}) {
  return (
    <div className="group relative bg-white rounded-lg border border-[#E2E8F0] p-3 sm:p-4 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden">
      <div
        onClick={onClickFull}
        className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] bg-[#F8FAFC] rounded-md overflow-hidden cursor-zoom-in flex items-center justify-center p-3"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImg.src}
            src={currentImg.src}
            alt={currentImg.alt}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="max-w-full max-h-full object-contain filter drop-shadow-xs group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => onSelectThumb(idx)}
              className={`relative w-14 h-10 sm:w-16 sm:h-12 rounded bg-[#F8FAFC] border transition-all shrink-0 p-1 ${
                activeIndex === idx
                  ? 'border-[#2287c3] ring-1 ring-[#2287c3]'
                  : 'border-[#E2E8F0] opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Shared content block
function ContentBlock({
  num,
  title,
  description,
  secondaryText,
  onViewDetails,
  whatsappLink,
}: {
  num: string;
  title: string;
  description: string;
  secondaryText?: string;
  onViewDetails: () => void;
  whatsappLink: string;
}) {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-3xl lg:text-4xl font-extrabold text-[#E2E8F0] tracking-tighter leading-none mb-1 font-mono">
        {num}
      </div>

      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#071E33] tracking-tight mb-3 leading-snug">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-[#42566A] leading-relaxed mb-3">
        {description}
      </p>

      {secondaryText && (
        <p className="text-xs text-[#071E33] font-medium bg-white p-3 rounded border border-[#E2E8F0] mb-4">
          {secondaryText}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#E2E8F0]">
        <button
          onClick={onViewDetails}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071E33] hover:text-[#2287c3] transition-colors group cursor-pointer"
        >
          <span>View Details</span>
          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#2287c3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded bg-[#071E33] text-white text-[11px] uppercase tracking-wider font-semibold hover:bg-[#112840] transition-colors"
        >
          Inquire Now
        </a>
      </div>
    </div>
  );
}

export function RubberStoppersSection() {
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({
    'product-01': 0,
    'product-02': 0,
    'product-03': 0,
    'product-04': 0,
  });

  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; alt: string; title: string } | null>(null);
  const [detailProduct, setDetailProduct] = useState<ProductCategory | null>(null);

  const handleSelectThumbnail = (productId: string, index: number) => {
    setActiveImageIndices((prev) => ({ ...prev, [productId]: index }));
  };

  const whatsappLink =
    'https://wa.me/919898866610?text=Hello%20Sealwell%20Packaging%2C%20I%20am%20interested%20in%20your%20Rubber%20Stoppers%20range.';

  return (
    <section className="rubber-stoppers-root bg-[#F0F4F8] text-[#071E33] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden font-sans border-t border-[#E2E8F0]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12 text-left max-w-3xl"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#071E33] mb-3 leading-tight">
            Pharmaceutical &amp; Industrial Rubber Stoppers
          </h2>

          <p className="text-xs sm:text-sm text-[#42566A] leading-relaxed max-w-2xl mb-5 font-normal">
            We manufacture high-quality rubber stoppers for pharmaceutical and allied industries, with extensive experience in rubber product manufacturing since 1995. Our products are available in different materials, sizes and colours and can also be customized according to specific customer requirements.
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-[1.5px] w-full bg-gradient-to-r from-[#2287c3] via-[#071E33]/20 to-transparent origin-left"
          />
        </motion.div>

        {/* ========================================================= */}
        {/* EXPERIENCE HIGHLIGHT TRUST BADGE                           */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 md:mb-16 bg-white/90 backdrop-blur-md rounded-lg p-4 sm:p-5 md:p-6 border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#071E33] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-md border border-[#1F3852] text-center shrink-0">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight block leading-none text-white">
                30+
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#2287c3] block mt-0.5">
                Years of Experience
              </span>
            </div>
            <div>
              <h4 className="text-sm md:text-base font-semibold text-[#071E33]">
                Since 1995
              </h4>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#42566A] leading-relaxed sm:border-l sm:border-[#2287c3]/30 sm:pl-5">
            With 30+ years of experience since 1995, we combine manufacturing expertise with a strong understanding of customer-specific requirements to deliver consistent and reliable rubber components.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* EDITORIAL PRODUCT SEQUENCE                                */}
        {/* ========================================================= */}
        <div className="space-y-10 sm:space-y-16 md:space-y-20">
          {PRODUCTS_DATA.map((product) => {
            const activeIndex = activeImageIndices[product.id] || 0;
            const currentImg = product.images[activeIndex];

            // -------------------------------------------------------
            // PRODUCT 01: IMAGE LEFT / CONTENT RIGHT
            // Mobile: image top, content below
            // Desktop: side by side (image left, content right)
            // -------------------------------------------------------
            if (product.layout === 'left-image') {
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start border-b border-[#E2E8F0] pb-10 sm:pb-14 md:pb-16"
                >
                  {/* Image — always first on mobile, left on desktop */}
                  <motion.div
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-1 lg:col-span-6 lg:sticky lg:top-24"
                  >
                    <ImageCard
                      currentImg={currentImg}
                      images={product.images}
                      productId={product.id}
                      activeIndex={activeIndex}
                      onClickFull={() => setFullscreenImage({ src: currentImg.src, alt: currentImg.alt, title: product.title })}
                      onSelectThumb={(idx) => handleSelectThumbnail(product.id, idx)}
                    />
                  </motion.div>

                  {/* Content — always second on mobile, right on desktop */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="order-2 lg:col-span-6"
                  >
                    <ContentBlock
                      num={product.num}
                      title={product.title}
                      description={product.description}
                      secondaryText={product.secondaryText}
                      onViewDetails={() => setDetailProduct(product)}
                      whatsappLink={whatsappLink}
                    />
                  </motion.div>
                </div>
              );
            }

            // -------------------------------------------------------
            // PRODUCT 02: IMAGE RIGHT / CONTENT LEFT
            // Mobile: image top, content below (natural order)
            // Desktop: content left, image right
            // -------------------------------------------------------
            if (product.layout === 'right-image') {
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start border-b border-[#E2E8F0] pb-10 sm:pb-14 md:pb-16"
                >
                  {/* Image — first on mobile (order-1), right on desktop (lg:order-2) */}
                  <motion.div
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="order-1 lg:order-2 lg:col-span-6 lg:sticky lg:top-24"
                  >
                    <ImageCard
                      currentImg={currentImg}
                      images={product.images}
                      productId={product.id}
                      activeIndex={activeIndex}
                      onClickFull={() => setFullscreenImage({ src: currentImg.src, alt: currentImg.alt, title: product.title })}
                      onSelectThumb={(idx) => handleSelectThumbnail(product.id, idx)}
                    />
                  </motion.div>

                  {/* Content — second on mobile (order-2), left on desktop (lg:order-1) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1 lg:col-span-6"
                  >
                    <ContentBlock
                      num={product.num}
                      title={product.title}
                      description={product.description}
                      secondaryText={product.secondaryText}
                      onViewDetails={() => setDetailProduct(product)}
                      whatsappLink={whatsappLink}
                    />
                  </motion.div>
                </div>
              );
            }

            // -------------------------------------------------------
            // PRODUCT 03: WIDE HORIZONTAL SHOWCASE
            // -------------------------------------------------------
            if (product.layout === 'wide-showcase') {
              return (
                <motion.div
                  key={product.id}
                  id={product.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 md:p-8 shadow-xs hover:shadow-sm transition-shadow duration-300 border-b border-[#E2E8F0] pb-8 sm:pb-10 md:pb-12"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-[#E2E8F0]">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#E2E8F0] tracking-tight font-mono">
                          {product.num}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#071E33]">
                        {product.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => setDetailProduct(product)}
                      className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded border border-[#071E33] text-[#071E33] text-[11px] uppercase tracking-wider font-semibold hover:bg-[#071E33] hover:text-white transition-all cursor-pointer self-start sm:self-auto shrink-0"
                    >
                      <span>View Specifications</span>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center mt-4 sm:mt-6">
                    <div className="lg:col-span-5 space-y-3">
                      <p className="text-xs sm:text-sm text-[#42566A] leading-relaxed">
                        {product.description}
                      </p>
                      {product.secondaryText && (
                        <p className="text-xs text-[#071E33] leading-relaxed border-l-2 border-[#2287c3] pl-3 font-medium">
                          {product.secondaryText}
                        </p>
                      )}
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 gap-2 sm:gap-3">
                      {product.images.map((img) => (
                        <div
                          key={img.src}
                          onClick={() =>
                            setFullscreenImage({
                              src: img.src,
                              alt: img.alt,
                              title: `${product.title}`,
                            })
                          }
                          className="group relative h-[150px] sm:h-[180px] md:h-[220px] bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] p-2 sm:p-3 flex items-center justify-center cursor-zoom-in overflow-hidden"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="max-w-full max-h-full object-contain filter drop-shadow-xs group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            }

            // -------------------------------------------------------
            // PRODUCT 04: PREMIUM MULTI-IMAGE COLLAGE SHOWCASE
            // -------------------------------------------------------
            if (product.layout === 'collage') {
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className="border-b border-[#E2E8F0] pb-10 sm:pb-14 md:pb-16"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-6 sm:mb-8"
                  >
                    <div className="text-3xl lg:text-4xl font-extrabold text-[#E2E8F0] tracking-tighter leading-none mb-1 font-mono">
                      {product.num}
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#071E33] tracking-tight mb-2 leading-snug">
                      {product.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#42566A] leading-relaxed">
                      {product.description}
                    </p>
                  </motion.div>

                  {/* Collage grid: single column on mobile, 12-col on md+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4 items-stretch">
                    {/* Large featured image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      onClick={() =>
                        setFullscreenImage({
                          src: product.images[0].src,
                          alt: product.images[0].alt,
                          title: 'Custom Red & Colour Variants',
                        })
                      }
                      className="group sm:col-span-1 md:col-span-7 bg-white rounded-lg border border-[#E2E8F0] p-3 sm:p-4 shadow-xs hover:shadow-sm transition-all duration-300 relative cursor-zoom-in min-h-[220px] sm:min-h-[260px] md:min-h-[320px] flex flex-col justify-between overflow-hidden"
                    >
                      <div className="my-auto py-3 flex items-center justify-center">
                        <img
                          src={product.images[0].src}
                          alt={product.images[0].alt}
                          className="max-w-full max-h-[180px] sm:max-h-[200px] md:max-h-[220px] object-contain filter drop-shadow-xs group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>

                      <div className="flex items-center justify-end pt-3 border-t border-[#E2E8F0] z-10">
                        <span className="text-[10px] text-[#2287c3] font-semibold flex items-center gap-1">
                          Preview <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </span>
                      </div>
                    </motion.div>

                    {/* Side thumbnails — 2 col on mobile/sm, single col on md */}
                    <div className="sm:col-span-1 md:col-span-5 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-3 sm:gap-4">
                      {product.images.slice(1).map((img, index) => (
                        <motion.div
                          key={img.src}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                          onClick={() =>
                            setFullscreenImage({
                              src: img.src,
                              alt: img.alt,
                              title: product.title,
                            })
                          }
                          className="group bg-white rounded-lg border border-[#E2E8F0] p-2 sm:p-3 shadow-xs hover:shadow-sm transition-all duration-300 relative cursor-zoom-in min-h-[120px] sm:min-h-[140px] flex items-center gap-3 overflow-hidden"
                        >
                          <div className="w-full h-[100px] sm:h-[120px] bg-[#F8FAFC] rounded p-2 flex items-center justify-center shrink-0">
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="max-w-full max-h-full object-contain filter drop-shadow-xs group-hover:scale-[1.02] transition-transform duration-300"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* ========================================================= */}
        {/* TECHNICAL SPECIFICATIONS AREA                              */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-10 sm:my-14 md:my-16 bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-6 md:p-8 shadow-xs relative overflow-hidden"
        >
          <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[#E2E8F0]">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#071E33] tracking-tight">
              Product Specifications
            </h3>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* AVAILABLE SIZES */}
            <div className="py-2 border-b border-[#E2E8F0]">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#68798A] mb-2">
                AVAILABLE SIZES
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {TECHNICAL_SPECS.sizes.map((sz) => (
                  <span
                    key={sz}
                    className="text-xs sm:text-sm font-bold text-[#071E33] bg-[#F8FAFC] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded border border-[#E2E8F0]"
                  >
                    {sz}
                  </span>
                ))}
              </div>
            </div>

            {/* AVAILABLE MATERIALS */}
            <div className="py-2 border-b border-[#E2E8F0]">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#68798A] mb-2">
                AVAILABLE MATERIALS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {TECHNICAL_SPECS.materials.map((mat) => (
                  <div
                    key={mat}
                    className="flex items-center gap-2 text-xs font-semibold text-[#071E33] bg-[#F8FAFC] p-2 sm:p-2.5 rounded border border-[#E2E8F0]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#071E33] shrink-0" />
                    {mat}
                  </div>
                ))}
              </div>
            </div>

            {/* AVAILABLE COLOURS */}
            <div className="py-2">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#68798A] mb-2">
                AVAILABLE COLOURS
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {TECHNICAL_SPECS.colours.map((clr) => (
                  <div
                    key={clr}
                    className="flex items-center gap-2 text-xs font-semibold text-[#071E33] bg-[#F8FAFC] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded border border-[#E2E8F0]"
                  >
                    {clr === 'Grey' && <span className="w-3 h-3 rounded-full bg-gray-400 border border-gray-500 shrink-0" />}
                    {clr === 'Dark Grey' && <span className="w-3 h-3 rounded-full bg-gray-700 border border-gray-800 shrink-0" />}
                    {clr === 'Red' && <span className="w-3 h-3 rounded-full bg-red-600 border border-red-700 shrink-0" />}
                    {clr.includes('Custom') && <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 shrink-0" />}
                    <span>{clr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* CUSTOMIZATION HIGHLIGHT PANEL                              */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 md:mb-16 bg-[#071E33] text-white rounded-xl p-5 sm:p-6 md:p-10 relative overflow-hidden shadow-md border border-[#1F3852]"
        >
          <div className="max-w-2xl relative z-10 mb-5 sm:mb-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-3" style={{ color: '#ffffff' }}>
              Customized To Your Requirement
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed font-normal" style={{ color: '#E2E8F0' }}>
              We offer customized rubber stopper manufacturing based on customer specifications. Customized sizes, dimensions, colours, materials and designs can be developed as per sample, drawing or specific application requirements.
            </p>
          </div>

          <div className="relative z-10 pt-4 border-t border-[#1F3852]">
            <div className="flex flex-wrap gap-2">
              {CUSTOM_TAGS.map((tag) => (
                <div
                  key={tag}
                  className="bg-[#112840] text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded border border-[#1F3852]"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* PRODUCT SECTION CTA                                       */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl border border-[#E2E8F0] p-5 sm:p-6 md:p-8 text-center max-w-3xl mx-auto shadow-xs"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#071E33] tracking-tight mb-3">
            Looking for a specific size or specification?
          </h3>
          <p className="text-xs sm:text-sm text-[#42566A] max-w-xl mx-auto mb-5 sm:mb-6 leading-relaxed">
            Contact us with your requirement, drawing or sample and our team will assist you with the appropriate rubber stopper solution.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg bg-[#071E33] font-semibold text-xs uppercase tracking-wider hover:bg-[#112840] transition-colors inline-flex items-center justify-center gap-2"
              style={{ color: '#ffffff' }}
            >
              <span>Send Requirement</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a
              href="/contact"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg border border-[#071E33] text-[#071E33] font-semibold text-xs uppercase tracking-wider hover:bg-[#F0F4F8] transition-colors inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

      </div>

      {/* ========================================================= */}
      {/* FULLSCREEN LIGHTBOX MODAL                                 */}
      {/* ========================================================= */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 z-50 bg-[#071E33]/90 backdrop-blur-md p-3 sm:p-4 flex items-center justify-center cursor-zoom-out"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl p-4 sm:p-5 shadow-2xl flex flex-col items-center justify-center cursor-default"
            >
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute top-3 right-3 bg-[#F0F4F8] hover:bg-[#071E33] hover:text-white text-[#071E33] p-1.5 rounded-full transition-colors z-10"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <h4 className="text-xs sm:text-sm font-bold text-[#071E33] mb-3 self-start border-b border-[#E2E8F0] pb-1.5 w-full pr-10">
                {fullscreenImage.title}
              </h4>

              <div className="w-full flex-1 flex items-center justify-center p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]" style={{ maxHeight: 'calc(90vh - 100px)' }}>
                <img
                  src={fullscreenImage.src}
                  alt={fullscreenImage.alt}
                  className="max-w-full max-h-full object-contain filter drop-shadow-md"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* PRODUCT DETAILS DRAWER / MODAL                            */}
      {/* ========================================================= */}
      <AnimatePresence>
        {detailProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDetailProduct(null)}
            className="fixed inset-0 z-50 bg-[#071E33]/80 backdrop-blur-md p-3 sm:p-4 flex items-end sm:items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full sm:max-w-2xl max-h-[90vh] bg-white rounded-t-2xl sm:rounded-xl p-4 sm:p-6 shadow-2xl overflow-y-auto"
            >
              <button
                onClick={() => setDetailProduct(null)}
                className="absolute top-4 right-4 bg-[#F0F4F8] hover:bg-[#071E33] hover:text-white text-[#071E33] p-1.5 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Drag handle for mobile */}
              <div className="w-10 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-4 sm:hidden" />

              <div className="text-xl sm:text-2xl font-extrabold text-[#2287c3] font-mono mb-1">
                {detailProduct.num}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#071E33] mb-3">
                {detailProduct.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#42566A] leading-relaxed mb-4">
                {detailProduct.description}
              </p>

              {detailProduct.secondaryText && (
                <div className="bg-[#F0F4F8] p-3 rounded border border-[#E2E8F0] mb-4 text-xs text-[#071E33]">
                  {detailProduct.secondaryText}
                </div>
              )}

              <div className="border-t border-[#E2E8F0] pt-4 mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#F8FAFC] p-2.5 rounded border border-[#E2E8F0]">
                    <span className="text-[10px] uppercase text-[#68798A] block font-bold">Sizes</span>
                    <span className="font-semibold text-[#071E33]">13mm to 33mm</span>
                  </div>
                  <div className="bg-[#F8FAFC] p-2.5 rounded border border-[#E2E8F0]">
                    <span className="text-[10px] uppercase text-[#68798A] block font-bold">Materials</span>
                    <span className="font-semibold text-[#071E33]">Butyl, Bromobutyl, Chlorobutyl, Neoprene</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#E2E8F0]">
                <button
                  onClick={() => setDetailProduct(null)}
                  className="px-4 py-2 rounded border border-[#E2E8F0] text-[#071E33] text-[11px] uppercase tracking-wider font-semibold hover:bg-[#F0F4F8]"
                >
                  Close
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded bg-[#071E33] text-white text-[11px] uppercase tracking-wider font-semibold hover:bg-[#112840]"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
