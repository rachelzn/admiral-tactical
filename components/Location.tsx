'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="location" className="py-24 bg-surface" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="section-label">Lokasi</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pabrik Kami di Bandung</h2>
            <p className="text-lg text-text-secondary font-light leading-relaxed mb-8">
              Jl. Gn. Puntang Kp Sirna Galih No.KM 29,<br />
              Desa Campaka Mulya, Kec. Cimaung,<br />
              Kabupaten Bandung, Jawa Barat 40374
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-olive-600 flex-shrink-0" />
                <span className="text-base text-text-secondary">+62 851-2133-0886</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-olive-600 flex-shrink-0" />
                <span className="text-base text-text-secondary">admiraltactical@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-olive-600 flex-shrink-0" />
                <span className="text-base text-text-secondary">Senin – Sabtu, 08.00 – 17.00 WIB</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://share.google/GFW264UNLakG0FjIL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MapPin className="w-4 h-4" />
                Buka di Google Maps
              </a>
              <a
                href="https://wa.me/6285121330886"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Kami
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="rounded-lg overflow-hidden aspect-video md:aspect-auto md:h-96 bg-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.39322841!2d107.5272!3d-6.9175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3281af4!2sBandung%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[30%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
