import { withHandlers } from 'recompose';

export default withHandlers({
    onClick: ({ setOuterColor, setInnerColor, setDescend, descend }) => () => {
        let newCounter = descend - 1;

        if (newCounter === 0) {
            newCounter = 5;

            setOuterColor('orange');
            setInnerColor('orange');
        }

        setDescend(newCounter);
    }
});
