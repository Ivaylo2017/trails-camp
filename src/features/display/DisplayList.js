import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeatureCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';

const DisplayList = () => {
    const items = [selectFeatureCampsite(), selectFeaturedPromotion()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;