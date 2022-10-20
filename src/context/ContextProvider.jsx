import React, { useContext, useState } from 'react';

const QtyCountContext = React.createContext();
const QtyCountIncrementContext = React.createContext();

export function useQtyCount() {
    return useContext(QtyCountContext)
}

export function useQtyIncrementUpdate() {
    return useContext(QtyCountIncrementContext)
}

function ContextProvider({ children }) {
    const [qtyCount, setQtyCount] = useState(1);

    function qtyIncrement() {
        setQtyCount(function (prevCount) {
            return (prevCount += 1);
        });
    };

    function qtyDecrement() {
        setQtyCount(function (prevCount) {
            if (prevCount > 0) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 0);
            }
        });
    };

    return (
        <QtyCountContext.Provider value={qtyCount}>
            <QtyCountIncrementContext.Provider value={{ qtyIncrement, qtyDecrement }}>
                {children}
            </QtyCountIncrementContext.Provider>
        </QtyCountContext.Provider>
    )
}

export { ContextProvider };