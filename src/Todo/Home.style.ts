import { mergeStyleSets, IProcessedStyleSet } from '@fluentui/react';
import { IStyle } from '@fluentui/react/lib/Styling';


interface IHomeStyle {
    todoContainer: IStyle;
    headerStyle: IStyle;
    pivotRoot: IStyle;
}

const HomeStyle: IProcessedStyleSet<IHomeStyle>= mergeStyleSets({
    todoContainer: {
        width: '50%',
        height: '80%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow:'rgb(2, 36, 100) 5px 10px 15px',
    },
    headerStyle: {
      height:50,
      backgroundColor: 'rgb(73, 149, 237)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pivotRoot: {
        display: 'flex',
        justifyContent: 'center',
    },
    pivotContainer:{
        margin:20,
    },
});
export default HomeStyle;