import React from 'react';
import {useLocation} from "react-router-dom";
import Box from '@mui/material/Box';
import Card  from '@mui/material/Card';
import Divider  from '@mui/material/Divider';
import Paper  from '@mui/material/Paper';
import Typography  from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { load } from 'js-yaml';
import CbtStepper from '../components/cbt/CbtStepper';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Cbt(props) {
    const [text, setText] = React.useState(null);
    const [answer, setAnswer] = React.useState(-1);
    const [innings, setInnings] = React.useState([]);
    const search = useLocation().search;
    const cbtId = props.cbtId;

    React.useEffect(() => {
        console.log('cbt useEffect loaded');
        fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/0/202101.yaml')
        .then(res => res.blob())
        .then(blob => blob.text())
        .then(res => {
            setText(load(res));
        });

        fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/innings.yaml')
            .then(res => res.blob())
            .then(blob => blob.text())
            .then(res => {
                console.log('inning loaded', cbtId);
                let _innings = load(res).filter(x => x.testId == cbtId);
                setInnings(_innings);
            });
    }, []);
      
    function initItemsTemplate(items) {
        return items.map((answer, i) => {
            return (
                <Box key={i}>
                    <Box className="papar-question-content">
                    <Typography key={i.toString()}
                        style={{ margin: '5px 0px 0px 0px' }}
                        children={`${i + 1}. ${answer.example}`}/>
                    </Box>
                    <Divider className="paper-question-divider"/>
                </Box>
            );
        })
    }

    function getAnswer(answers) {
        let answer = -1;
        answers.map((x, i) => {
            if(x.isAnswer === 'y') {
                answer = i + 1;
            }
        });
        return answer;
    }

    return (
        <Box style={{ minWidth: '200px' }}>

            <Box style={{backgroundColor: '#ffffff', borderBottom: '1px solid #dddddd', padding: '14px 24px 14px 24px' }}>
                <Typography variant="h6" children={props.title}/>
            </Box>

            <Box margin={3}>
                <CbtStepper cbtId={cbtId} innings={innings}/>
            </Box>

            <Box margin={3} style={{maxWidth: '600px', display: 'none' }}>
                {text == null ? null
                :
                    text.map((item, i) => {
                        return (
                            <Box key={item.seq}>
                                <Box style={{ margin: '0px 0px 5px 0px' }}>
                                    <Typography 
                                        children={`문제 ${i + 1}번, 과목: ${item.subjectName}`}
                                        variant="caption"/>
                                </Box>
                                <Card className="paper-question"
                                    style={{borderRadius: 10}}
                                    variant="outlined">
                                    <Box className="papar-question-content">
                                        <Typography children={item.question}/>
                                    </Box>
                                    <Divider className="paper-question-divider"/>
                                    <Box>
                                        {item.infos != null ? 
                                            item.infos.map((info, i) => {
                                                return (
                                                    <Box key={i}>
                                                        <Box className="papar-question-content">
                                                            <img src={info.src}/>
                                                        </Box>
                                                        <Divider className="paper-question-divider"/>
                                                    </Box>
                                                );
                                            })
                                            : null
                                        }
                                    </Box>
                                    <Box>
                                        {initItemsTemplate(item.answers)}
                                    </Box>
                                    <Box className="papar-question-content">
                                        <Typography>
                                            정답 <span style={{color: '#ffffff'}}>{getAnswer(item.answers)}</span>
                                        </Typography>
                                    </Box>
                                </Card>
                            </Box>
                        );
                    })
                }
            </Box>
        </Box>
    );
}
