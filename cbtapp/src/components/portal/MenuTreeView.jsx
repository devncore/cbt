import * as React from 'react';
import { useHistory } from "react-router-dom";
import { load } from 'js-yaml';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import { alpha, styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Collapse from '@mui/material/Collapse';
import { useSpring, animated } from 'react-spring';


function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14, color: '#333333' }} {...props}>
      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14, color: '#333333' }} {...props}>
      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ width: 14, height: 14, color: '#34568B' }}
      {...props}
    >
      <path d="M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(20px,0,0)',
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = styled((props) => (
    <TreeItem {...props} TransitionComponent={TransitionComponent} />))(({ theme }) => ({
        [`& .${treeItemClasses.iconContainer}`]: {
            '& .close': {
                opacity: 0.3,
            },
        },
        [`& .${treeItemClasses.group}`]: {
            marginLeft: 15,
            paddingLeft: 0,
            borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.2)}`,
        },
        [`& .${treeItemClasses.content}`]: {
            '& .MuiTreeItem-label': {
                paddingTop: '4px',
                paddingBottom: '4px',
                paddingLeft: '0px',
                fontSize: '12px',
                marginLeft: 0,
                fontFamily: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),
            },
        },
}));

export default function MenuTreeView(props) {
    const [text, setText] = React.useState([]);
    
    React.useEffect(() => {
      fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/menus.yaml')
      .then(res => res.blob())
      .then(blob => blob.text())
      .then(res => {
          setText(load(res));
      });
    }, []);
    
    const history = useHistory();

    function menuClick(e, item) {
        if(item.type === 'W') {
            history.push(`/cbt/id=${item.pageId}`);
        }
    }

    function getNodes(parentId) {
        var source = text.filter(x => x.parentId === parentId).map(item => {
            return (
                <StyledTreeItem 
                    key={item.nodeId.toString()}
                    onClick={(e) => menuClick(e, item)}
                    nodeId={item.nodeId.toString()} 
                    label={item.label}>
                    {getNodes(item.nodeId.toString())}
                </StyledTreeItem>
             );
        });
        return source;
    } 

    return (
        <TreeView
            defaultExpanded={['1', '2', '3', '4', '5']}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpandIcon={<PlusSquare />}
            defaultEndIcon={<CloseSquare />}
            sx={{ height: 264, flexGrow: 1, maxWidth: 400, margin: '0px', overflowY: 'auto' }}>
            {getNodes("-1")}
        </TreeView>
    );
}
