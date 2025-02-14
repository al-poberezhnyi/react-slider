import React, { Component } from 'react';
import { RiArrowRightLine } from '@remixicon/react';
import { RiArrowLeftLine } from '@remixicon/react';

import styles from './Slider.module.scss';
import Slide from './Slide';

class Slider extends Component {
    constructor (props) {
        super(props);

        this.state = {
            currentIndex: 0,
        };
    }

    get prevIndex () {
        const { slides } = this.props;
        const { currentIndex } = this.state;

        return (currentIndex - 1 + slides.length) % slides.length;
    }
    get prevIndex2 () {
        const { slides } = this.props;
        const { currentIndex } = this.state;

        return (currentIndex - 2 + slides.length) % slides.length;
    }
    get nextIndex () {
        const { currentIndex } = this.state;
        const { slides } = this.props;

        return (currentIndex + 1) % slides.length;
    }
    get nextIndex2 () {
        const { currentIndex } = this.state;
        const { slides } = this.props;

        return (currentIndex + 2) % slides.length;
    }

    next = () => {
        const { currentIndex } = this.state;
        const { slides } = this.props;
        this.setState({
            currentIndex: (currentIndex + 1) % slides.length,
        });
    };
    prev = () => {
        const { slides } = this.props;
        const { currentIndex } = this.state;
        this.setState({
            currentIndex: (currentIndex - 1 + slides.length) % slides.length,
        });
    };

    render () {
        console.log('render :>> ');
        const { currentIndex } = this.state;
        const { slides } = this.props;

        return (
            <section className={styles.slider}>
                <div className={styles.sliderInner}>
                    <Slide {...slides[currentIndex]} isBg />
                    <div className={styles.carousel}>
                        <div className={styles.carouselBtnContainer}>
                            <button
                                className={styles.carouselBtn}
                                onClick={this.prev}
                            >
                                <RiArrowLeftLine className={styles.btnIcon} />
                            </button>
                            <button
                                className={styles.carouselBtn}
                                onClick={this.next}
                            >
                                <RiArrowRightLine className={styles.btnIcon} />
                            </button>
                        </div>
                        <div className={styles.carouselList}>
                            <Slide {...slides[currentIndex]} isCurrent />
                            <Slide {...slides[this.nextIndex]} />
                            <Slide {...slides[this.nextIndex2]} />
                            <Slide {...slides[this.prevIndex2]} isHidden />
                            <Slide {...slides[this.prevIndex]} isHidden />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Slider;
