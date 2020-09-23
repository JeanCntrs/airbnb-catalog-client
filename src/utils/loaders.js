import React from 'react';
import ContentLoader from 'react-content-loader';

export const CardLoader = () => {
    const rows = 2
    const columns = 3
    const coverHeight = 400
    const coverWidth = 395
    const padding = 20
    const speed = 1

    const coverHeightWithPadding = coverHeight + padding
    const coverWidthWithPadding = coverWidth + padding
    const initial = 20
    const covers = Array(columns * rows).fill(1)

    return (
        <ContentLoader
            speed={speed}
            width={columns * coverWidthWithPadding}
            height={rows * coverHeightWithPadding}
        >
            {covers.map((g, i) => {
                let vy = Math.floor(i / columns) * coverHeightWithPadding + initial
                let vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding)
                return (
                    <rect key={i}
                        x={vx + 15}
                        y={vy}
                        rx="0"
                        ry="0"
                        width={coverWidth}
                        height={coverHeight}
                    />
                )
            })}
        </ContentLoader>
    )
};