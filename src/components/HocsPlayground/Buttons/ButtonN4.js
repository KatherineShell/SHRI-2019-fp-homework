/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import { compose } from 'recompose';
import BaseButton from './BaseButton';

import withDefaultColor from '../hocs/withDefaultColor';
import withSmallSize from '../hocs/withSmallSize';
import withOnClickSetDescendColor from '../hocs/withOnClickSetDescendColor';
import withRelativePosition from '../hocs/withRelativePosition';

export default compose(
    withOnClickSetDescendColor,
    withSmallSize,
    withDefaultColor,
    withRelativePosition
)(BaseButton)
