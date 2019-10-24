import { withHandlers } from 'recompose';

export default withHandlers({
    onClick: ({ setOuterColor, setInnerColor, setCounter, counter }) => () => {
        let newCounter = counter + 1;
        let color = newCounter % 2 === 0 ? 'grey' : 'green';

        setCounter(newCounter);
        setOuterColor(color);
        setInnerColor(color);
    }
});
