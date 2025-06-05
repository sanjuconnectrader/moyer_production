import React from 'react';
import './DronePhotographyDetails.css';

const DronePhotographyDetails = () => (
  <section className="drone-photography-details">
    <div className="drone-photography-details__container">
      {/* ── Centered Heading ── */}
      <h2 className="drone-photography-details__heading">
        Elevate your story with breathtaking aerial imagery from&nbsp;Moyer&nbsp;Productions in&nbsp;Bonney&nbsp;Lake, Washington!
      </h2>

      {/* ── Main Copy ── */}
      <div className="drone-photography-details__content">
        <p className="drone-photography-details__paragraph">
          At <strong>Moyer Productions</strong> we deliver end-to-end <em>drone photography</em> that rivals national studios while
          preserving the warm, collaborative spirit of a local partner. From flight planning
          and air-space clearances to creative shot lists and cinematic drone moves, we capture
          sweeping aerial perspectives that elevate real-estate showcases, tourism promos,
          construction progress, outdoor events, and brand films.
        </p>

        <p className="drone-photography-details__paragraph">
          Our FAA-certified pilots manage every mission in-house for total quality control and
          safety. We arrive on-site with 4K/6K multi-sensor drones, dual-operator gimbals, and
          redundant GPS navigation, streaming a live feed to calibrated monitors so you can
          approve angles in real time. With broadcast-grade audio options and ground-level
          B-roll integration, every flight delivers a cohesive visual story that matches your
          brand voice and campaign goals.
        </p>

        <p className="drone-photography-details__paragraph">
          After landing, our editors apply cinematic color grades, horizon-level corrections,
          and seamless stitching for panoramas or orthomosaics. Deliverables arrive formatted
          for web, broadcast, and print, and our retainer bundles lock in discounted rates for
          recurring aerial updates. From initial flight plan to final render, <strong>Moyer
          Productions</strong> turns your vision into high-impact drone photography that sets
          you apart across the Puget Sound—and beyond.
        </p>
      </div>
    </div>
  </section>
);

export default DronePhotographyDetails;
