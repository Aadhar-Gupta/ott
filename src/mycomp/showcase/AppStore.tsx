"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useState } from "react";
import { apps } from "@/constants";

const AppCard = ({ app, onClick }: { app: any; onClick: () => void }) => (
  <motion.div
    className="p-4 w-[200px] h-[250px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <div className="text-5xl">{app.icon}</div>
    <h2 className="mt-2 font-bold">{app.name}</h2>
  </motion.div>
);

export default function AppStore() {
  const [selectedApp, setSelectedApp] = useState<any>(null);

  return (
    <>
      <div className="flex flex-col  bg-black items-center justify-center min-h-screen p-10">
        <h1 className="text-3xl text-white font-bold mb-6">App Store</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {apps.map((app) => (
            <AppCard
              key={app.id}
              app={app}
              onClick={() => setSelectedApp(app)}
            />
          ))}
        </div>

        {selectedApp && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg w-[300px] text-center"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            >
              <img src={selectedApp.src} alt="" />
              <h2 className="text-3xl">{selectedApp.icon}</h2>
              <h3 className="mt-2 text-xl font-bold">{selectedApp.name}</h3>
              <p className="text-gray-600 mt-1">{selectedApp.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </div>
      <Separator></Separator>
    </>
  );
}
