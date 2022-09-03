const Orientation = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
}

const Space = ({ width, height, orientation }) => {
    return (
        <div
            style={{
                width: orientation === Orientation.HORIZONTAL ? width : '0',
                height: orientation === Orientation.VERTICAL ? height : '0',
            }}
        />
    )
}

export const VerticalSpace = ({ height }) => <Space height={height} orientation={Orientation.VERTICAL} />

export default Space