// SharePopup.tsx
import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon } from 'react-share';
import './sharePopup.scss';

interface SharePopupProps {
    isVisible: boolean;
    onClose: () => void;
    shareUrl: string;
    title: string;
    position: { top: number; left: number }; // New position prop
}

const SharePopup: React.FC<SharePopupProps> = ({ isVisible, onClose, shareUrl, title, position }) => {
    if (!isVisible) return null;

    const copyPermalink = () => {
        navigator.clipboard.writeText(shareUrl);
        alert("Permalink copied to clipboard!"); // Optional: Notify the user
    };

    return (
        <div className="share-popup" style={{ top: position.top, left: position.left }}>
            <div className="close-icon" onClick={onClose}>&times;</div> {/* X icon for closing */}
            <button onClick={copyPermalink} className="copy-permalink-button">Copy Permalink</button>
            <div className="share-icons">
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={24} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={title}>
                    <TwitterIcon size={24} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl} title={title}>
                    <WhatsappIcon size={24} round={true} />
                </WhatsappShareButton>
                <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon size={24} round={true} />
                </LinkedinShareButton>
            </div>
        </div>
    );
};

export default SharePopup;