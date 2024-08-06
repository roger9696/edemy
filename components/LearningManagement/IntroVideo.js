import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
	ssr: false,
});

const IntroVideo = () => {
	// Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
	const openModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="video-area">
				<div className="container">
					<div className="video-box mt-0">
						<div className="image">
							<img
								src="/images/video-img2.jpg"
								className="shadow"
								alt="image"
							/>
						</div>
						<div
							onClick={(e) => {
								e.preventDefault();
								openModal();
							}}
							className="video-btn"
						>
							<i className="flaticon-play"></i>
						</div>
					</div>
				</div>
			</div>

			{/* If you want to change the video need to update videoID */}
			<ModalVideo
				channel="youtube"
				isOpen={!isOpen}
				videoId="bk7McNUjWgw"
				onClose={() => setIsOpen(!isOpen)}
			/>
		</>
	);
};

export default IntroVideo;
