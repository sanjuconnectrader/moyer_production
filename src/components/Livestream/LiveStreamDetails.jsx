import React from 'react';
import './LiveStreamDetails.css';

const LiveStreamDetails = () => (
  <section className="live-stream-details">
    <div className="live-stream-details__container">
      {/* ── Centered Heading ── */}
      <h2 className="live-stream-details__heading">
        Craft an unforgettable live-streaming showcase with&nbsp;Moyer&nbsp;Productions in&nbsp;Bonney&nbsp;Lake!
      </h2>

      {/* ── Main Copy ── */}
      <div className="live-stream-details__content">
        <p className="live-stream-details__paragraph">
      At Moyer Productions in Bonney Lake, Washington, we deliver turnkey live-stream production that matches national broadcast studios while keeping the friendly, hands-on spirit of a local team. From run-of-show planning and graphic-overlay design to multi-platform distribution, we engineer streams that captivate remote viewers and amplify your brand message. Whether you’re hosting a corporate town hall, product launch, music performance, or hybrid conference, every broadcast is tailored to your goals for reach, engagement, and ROI.
        </p>

        <p className="live-stream-details__paragraph">
    Our in-house crew manages the entire workflow with meticulous quality control. We roll up on site with 4K cinema cameras, broadcast-grade audio, redundant encoders, bonded cellular or fiber uplinks, and a mobile control room for seamless switching, lower-thirds, and picture-in-picture effects. Real-time monitoring dashboards—plus a private preview feed for your stakeholders—keep you in the loop, so last-second tweaks are handled smoothly without interrupting the show.
        </p>
      </div>

      <p className="live-stream-details__paragraph">
    After the cameras stop, we don’t. Our editors polish the recording for on-demand replay, craft bite-sized highlight reels, and deliver performance analytics that reveal viewer drop-offs and peak engagement spots. Need recurring broadcasts? Ask about our retainer bundles that lock in priority scheduling and reduced per-event rates. From initial concept to final VOD, Moyer Productions turns your live event into a professional, high-impact experience that resonates across the Puget Sound—and around the globe.
      </p>
    </div>
  </section>
);

export default LiveStreamDetails;
