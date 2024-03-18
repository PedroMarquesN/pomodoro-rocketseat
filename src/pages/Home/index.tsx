import {Play} from "phosphor-react";
import {
    CountDown,
    FormContainer,
    HomeContainer,
    MinutesAmountInput,
    Separator,
    StartCountButton,
    TaskInput
} from "./styles";

export function Home() {
    return(
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        list="list-suggestion"
                        id="task"
                        placeholder="Dê um nome para seu projeto"
                    />

                    <datalist id="list-suggestion">
                        <option value="Tarefa Matutina"/>
                        <option value="Tarefa Vespertina"/>
                        <option value="Tarefa Noturna"/>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput
                        placeholder="00"
                        type="number"
                        step={5}
                        min={5}
                        max={60}
                        id="minutesAmount"/>

                    <span>minutos.</span>
                </FormContainer>

                <CountDown>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDown>

                <StartCountButton disabled type="submit">
                    <Play size={24}/>
                    Começar
                </StartCountButton>
            </form>
        </HomeContainer>

    )
}