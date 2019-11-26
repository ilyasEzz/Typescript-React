import * as React  from 'react';

type HeaderProps = {
    text: string
}

function Header (props : HeaderProps)  {
    return (
        <div>
            <h1 className="text-warning">{props.text}</h1>
        </div>
    );
}

export default Header;
