import "./PageStepsIndicator.scss";

const PageStepsIndicator = ({currentStep, setCurrentStep}) => {
    const goToStep = (step) => {
        setCurrentStep(step);
    };

    return (
        <div className="page-steps-indicator-wrapper d-flex align-items-center justify-content-center">
            <div className="step-1 d-flex align-items-center justify-content-center" id={currentStep === 1 ? 'currentPage' : ''} onClick={()=>{currentStep === 2 && goToStep(1)}}>
                <span>1</span>
            </div>
            <p className="connector-line mb-0"></p>
            <div className="step-2 d-flex align-items-center justify-content-center" id={currentStep === 2 ? 'currentPage' : ''} onClick={()=>{currentStep === 1 && goToStep(2)}}>
                <span>2</span>
            </div>
        </div>
    );
}

export default PageStepsIndicator;
