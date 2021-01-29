import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { store1 } from '../stores/testing.js';

const Testing = observer(() => (
    <>
        <div>{store1.count}</div>
        <div>{store1.double}</div>
        <Button type="primary" onClick={() => store1.increment()}>
            {store1.count}
        </Button>
        <Link href="/">
            <a>Home</a>
        </Link>
    </>
));

export default Testing;
