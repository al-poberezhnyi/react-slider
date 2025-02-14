import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Slide.module.scss';

class Slide extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }
    // componentDidMount () {
    //     this.load();
    // }
    // load = () => {
    //     const img = new Image();
    //     const { src } = this.props;
    //     img.src = src;
    // };
    renderBg = styleImage => {
        console.log('render-bg');
        const { src, title, descriptions } = this.props;
        return (
            <>
                <div className={styles.sliderBg}>
                    <img className={styleImage} src={src} alt='qwert' />

                    <div className={styles.carouselItemInfo}>
                        <h2 className={styles.carouselItemTitle}>{title}</h2>
                        <p className={styles.carouselItemDescriptions}>
                            {descriptions}
                        </p>

                        <a className={styles.carouselItemLink} href='#'>
                            See More
                        </a>
                    </div>
                </div>
            </>
        );
    };
    renderImg = styleImage => {
        console.log('render-img');
        const { src } = this.props;
        return (
            <div className={styles.carouselImage}>
                <img className={styleImage} src={src} alt='qwert' />
            </div>
        );
    };

    render () {
        const { isBg, isCurrent, isHidden } = this.props;

        const styleImage = classNames(
            styles.imageItem,
            {
                [styles.isBg]: isBg,
            },
            {
                [styles.isCurrentImage]: isCurrent,
            },
            { [styles.isHiddenImage]: isHidden }
        );

        return (
            <>{isBg ? this.renderBg(styleImage) : this.renderImg(styleImage)}</>
        );
    }
}
export default Slide;
