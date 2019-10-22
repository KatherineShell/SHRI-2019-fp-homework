/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withSmallSize from '../hocs/withSmallSize';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withOnClickCounterOddChangeColor from '../hocs/withOnClickCounterOddChangeColor';

export default compose(
    withSmallSize,
    withPrimaryColor,
    withOnClickCounterOddChangeColor
)(BaseButton)
