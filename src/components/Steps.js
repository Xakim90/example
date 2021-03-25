import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';
import BasicTable from './Table';

// eslint-disable-next-line
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

// eslint-disable-next-line
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['First Step', 'Second Step', 'Third Step', 'Fourth Step'];
}

function getStepContent(step, changeState, getState, toggleBtn, values) {
  switch (step) {
    case 0:
      return (
        <Form
          changeState={changeState}
          getState={getState}
          toggleBtn={toggleBtn}
        />
      );
    case 1:
      return (
        <Form2
          changeState={changeState}
          getState={getState}
          toggleBtn={toggleBtn}
        />
      );
    case 2:
      return (
        <Form3
          changeState={changeState}
          getState={getState}
          toggleBtn={toggleBtn}
        />
      );
    case 3:
      return <BasicTable data={values} />;
    default:
      return 'Unknown step';
  }
}

export default function Steps(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  useEffect(() => {
    const nextBtn = document.getElementById('nextBtn');
    const finish = document.getElementById('nextBtn');
    if (nextBtn !== undefined && nextBtn !== null) {
      nextBtn.setAttribute('disabled', '');
      if (finish.innerHTML === 'Finish') {
        nextBtn.removeAttribute('disabled');
      }
    }
    
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.setToStore();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div> </div>
        ) : (
          <div>
            <div className={classes.instructions}>
              {getStepContent(
                activeStep,
                props.changeState,
                props.getState,
                props.toggleBtn,
                props.values
              )}
            </div>
            <div className="flex justify-center">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <button
                id="nextBtn"
                className="bg-green-500 text-white px-6 rounded-full py-1 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
