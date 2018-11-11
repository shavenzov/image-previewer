import {Directive, HostListener, Input, OnInit, ElementRef, Renderer2, AfterViewInit} from "@angular/core";
import {DefaultValueAccessor} from "@angular/forms";

/**
 * Implements integer only directive
 * Directive for html input element. 
 * Allows to input integer values from specific range.
 */

@Directive({ selector: "input[integer-only]" } )
export class IntegerOnlyDirective extends DefaultValueAccessor implements AfterViewInit{

    private readonly pattern : RegExp = /^[0-9]+$/;

    /**
     * Min allowed integer value
     */
    @Input( 'min-value' )
    minValue: number = Number.MIN_VALUE;

    /**
     * Max allowed integer value
     */
    @Input( 'max-value' )
    maxValue: number = Number.MAX_VALUE;

    /**
     * Previos input value
     */
    private prevValue: string;

    constructor(
        private host: ElementRef,
        private renderer: Renderer2
    ) {
        super( renderer, host, true );
    }

    ngAfterViewInit(): void{
        this.prevValue = this.host.nativeElement.value;
    }

    /**
     * Updates the value on the input event.
     */
    @HostListener( 'input', [ '$event.target.value'] )
    onInput( value: string ): void {
        
        let notValid: boolean = false;

        if ( value.length > 0 ){
            if ( ! this.pattern.test( value ) ){
                notValid = true;
            } else {
                const number: number = parseInt( value );
    
                if ( isNaN( number ) || ( number < this.minValue ) || ( number > this.maxValue ) ){
                    notValid = true;
                }
            }
            
            if ( ( value.length > 1 ) && ( value[ 0 ] === '0' ) ){
                notValid = true;
            }
        }

        if ( notValid ){
            value = this.prevValue;
        } else {
            this.prevValue = value;
        }

        this.writeValue( value );
    }
}