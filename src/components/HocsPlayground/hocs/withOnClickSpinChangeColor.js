import { withHandlers } from 'recompose';

const colors = ['pink', 'yellow', 'black', 'purple', 'lightblue'];

export default withHandlers({
    onClick: ({ setOuterColor, setInnerColor, setDegree, degree }) => () => {
        let newDegree = degree + 30;
        
        if (newDegree === 360) {
            let min = 0, max = colors.length - 1;
            let index = Math.floor(Math.random() * (max - min + 1)) + min;
            let color = colors[index];

            newDegree = 0;
            setOuterColor(color);
            setInnerColor(color);
        }

        setDegree(newDegree);
    }
});
