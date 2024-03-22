import ContentContainer from '../components/_landing-page/ContentContainer';
import HeroBanner from '../components/_landing-page/HeroBanner';
import PriceContainer from '../components/_landing-page/PriceContainer';
import QuotesImage from '../components/_landing-page/Quotes';

export default function LandingPage() {
    return (
        <>
            <HeroBanner />
            <ContentContainer />
            <PriceContainer />
            <QuotesImage />
        </>
    );
}
