import React from 'react';
import Axios from "axios";
import { styled } from '@mui/material/styles';
import { load } from 'js-yaml';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid  from '@mui/material/Grid';
import Stack  from '@mui/material/Stack';
import Paper  from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import Typography  from '@mui/material/Typography';
import CbtStepper from '../components/cbt/CbtStepper';
import ResetIconButton from '../components/cbt/ResetIconButton';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Test(props) {
    const history = useHistory();
    
    const [text, setText] = React.useState(null);
    const cbtId = props.cbtId;
    let currentSubject = '';
    
    const testCount = sessionStorage.getItem('testTypes');
    const subjects = sessionStorage.getItem('subjects');
    console.log('subjects: ',subjects);
    console.log('size: ',testCount);
    
    var dictResult = {};

    React.useEffect(() => {
        console.log('cbt useEffect loaded');

        fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/0/202101.yaml')
        .then(res => res.blob())
        .then(blob => blob.text())
        .then(res => {
            setText(load(res));
        });
    }, []);

    function answerChecked(event, answer) {
        console.log("정답체크중: ", answer.id, event.target.checked);
        answer.isChecked = event.target.checked;
    }
      
    function initItemsTemplate(item) {
        return item.answers.map((answer, index) => {
            answer.isChecked = false;
            answer.id = index;
            return (
                <FormControlLabel key={index} className="papar-answer-content" style={{margin: '0px 15px 0px 15px'}}
                    label={
                        <Typography key={index.toString()} variant="body2"
                            style={{ margin: '2px 0px 0px 0px' }}
                            children={`${index + 1}. ${answer.example}`}/>}
                    control={<Checkbox 
                        defaultChecked={answer.isChecked}
                        style={{ marginLeft: '0px'}} 
                        onChange={(event) => answerChecked(event, answer)}/>}/>
                        
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

    function getSubject(subjectName) {
        currentSubject = subjectName;
        return subjectName;
    }

    function restart() {
        history.push(`/cbt/id=${cbtId}`);
    }

    function submit() {

        console.log("결과보기 시작.");

        // DB 보내기 1주일째 안나가

        // 사용자한테 리포틀 보여줘.
        // 2021 1회차 정보처리기사
        // 과목 (ㅁㄴㅁ,ㅁㄴㅇ,ㄹ,ㄴㅇ)
        // 총 문제 5제
        // 정답 2문제 틀린무제 3
        // 몇점 
        // 1번문제 
        // 정답 4 2
        // 2번문제
        // 정답 3 1
        // 기술이랑 상관이없어 진짜.. 개발 하나도 못해도

        // 1 DB에 데이터 보내고

        const data = {
            Token: "123123213"
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': '*',
                'Access-Control-Allow-Methods': '*',
            }
        };

        Axios.post(
            process.env.REACT_APP_SERVICE_URL + '/api/cbt/saveTest', 
            data, 
            requestOptions)
            .then(function (response) {
                const data = response.data;
                console.log('saveTest completed:', data);
                if (data == "1") {
                    history.push("/cbt/result");
                }
        })
        .catch(function (error) {
            console.log(error);
        }); 

        text.filter(x=>subjects.includes(x.subject)).slice(0, testCount).map((item, index) => {
            console.log(`${item.seq}: ${item.question}`, item);
        });
    }

    return (
        <div className="frame-content">
            <Box style={{ minWidth: '200px', maxWidth: '600px', borderRight: '1px solid #dddddd', backgroundColor: '#f7f7f7' }}>
                <div style={{backgroundColor: 'rgba(255, 255, 255, 0.95)', borderBottom: '1px solid #dddddd', padding: '4px 24px 4px 24px', height: '36px', position: 'sticky', top: 0, zIndex: 9999 }}>
                    <Stack direction="row">
                        <Typography variant="h7" children={props.title} style={{marginTop: '8px'}}/>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button 
                            variant="contained"
                            size="small" 
                            color="success" 
                            children={"제출"}
                            onClick={submit}
                            />
                        <ResetIconButton onClick={restart}/>
                    </Stack>
                </div>
                <Box margin={0, 0, 0, 0}>
                    {text == null ? null
                    :
                        text.filter(x=>subjects.includes(x.subject)).slice(0, testCount).map((item, i) => {
                            return (
                                <Box key={item.seq}>
                                    {currentSubject != item.subjectName ?
                                        <Box style={{ margin: '10px 25px 0px 0px', textAlign: 'right' }}>
                                            <Typography 
                                                children={`과목: ${getSubject(item.subjectName)}`}
                                                variant="caption"/>
                                        </Box>
                                        : null
                                    }
                                    <div className="paper-question"
                                        style={{
                                            border: ''
                                        }}>
                                        <Box className="papar-question-content">
                                            <Typography variant="body1" children={`${i + 1}. ${item.question}`}/>
                                        </Box>
                                        <Box>
                                            {item.infos != null ? 
                                                item.infos.map((info, i) => {
                                                    return (
                                                        <Box key={i}>
                                                            <Box className="papar-question-content">
                                                                <img src={info.src} style={{maxWidth: '400px'}}/>
                                                            </Box>
                                                        </Box>
                                                    );
                                                })
                                                : null
                                            }
                                        </Box>
                                        <FormGroup>
                                            {initItemsTemplate(item)}
                                        </FormGroup>
                                        <Box style={{ height: '10px'}}/>
                                        <Box className="papar-question-content" style={{display: 'none'}}>
                                            <Typography>
                                                정답 <span style={{color: '#ffffff'}}>{getAnswer(item.answers)}</span>
                                            </Typography>
                                        </Box>
                                    </div>
                                </Box>
                            );
                        })
                    }
                </Box>

                <div style={{height: '60px'}}/>
            </Box>
        </div>
    );
}
