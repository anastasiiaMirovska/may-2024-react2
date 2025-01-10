import {FC} from 'react';
interface IProps {
    name: string
}
const TestComponent:FC<IProps> = ({name}) => {
    return (
        <div>
            <h1>Hello, {name}</h1>
        </div>
    );
};

export default TestComponent;
