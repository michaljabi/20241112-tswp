import {BehaviorSubject, distinctUntilChanged, map, Observable} from "rxjs";

// JS:
// const myState = { email: '', rate: 4, opinion: ''};
// dynamic access to field in JS:
// console.log(myState['rate'])

const INITIAL_STATE = { email: '', rate: 4, opinion: ''}
type RateFormType = typeof INITIAL_STATE;

export class RateFormState {
    private formState$ = new BehaviorSubject({ ...INITIAL_STATE });

    // TS Types....
    private updateStateAndEmit(state: Partial<RateFormType>) {
        const myState = this.formState$.getValue();
        this.formState$.next({ ...myState, ...state })
    }

    getState(): Observable<RateFormType>  {
        return this.formState$.asObservable();
    }

//    getRate(): Observable<number> {
    getRate(): Observable<RateFormType['rate']> {
        return this.formState$.pipe(map(s => s.rate), distinctUntilChanged())
    }

    setEmail(email: string) {
        this.updateStateAndEmit({ email });
        // const myState = this.formState$.getValue();
        // this.formState$.next({ ...myState, email })
    }

    setRate(rate: number) {
        // const myState = this.formState$.getValue();
        // this.formState$.next({ ...myState, rate })
        this.updateStateAndEmit({ rate });
    }
    
    clearForm() {
        this.formState$.next({ ...INITIAL_STATE })
    }
}