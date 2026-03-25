import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [23.7957, 86.4304],
      zoom: 12,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19,
    }).addTo(map);

    const icon = L.divIcon({
      html: `<div style="width:20px;height:20px;border-radius:50%;background:hsl(195 100% 50%);box-shadow:0 0 20px hsl(195 100% 50%/0.6);border:2px solid white;"></div>`,
      className: "",
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });

    L.marker([23.7957, 86.4304], { icon }).addTo(map)
      .bindPopup("<b>Bhavishya Kumar</b><br>Dhanbad, Jharkhand");

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <section id="location" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="Location" subtitle="Where I'm based." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass p-6 card-3d">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center shadow-[0_0_20px_hsl(195_100%_50%/0.2)]">
                <MapPin className="text-neon-blue" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Dhanbad, Jharkhand, India</h3>
                <span className="text-sm text-neon-cyan font-medium">📍 Available for Remote Work</span>
              </div>
            </div>
            <div
              ref={mapRef}
              className="w-full h-72 rounded-lg overflow-hidden border border-glass-border/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
