/*

 <section class="hero is-info">
    <div class="hero-body">
        <p class="title">
            ACME inc. :) ?
        </p>
        <p class="subtitle is-italic" data-subtitle>
            <!-- A Company that just Makes Everything... -->
        </p>
    </div>
</section>

* */



// Builder
import {section, div, p, withAttributes} from "../builders/dom-builders";

const pWithAttributes = (classNames = '', elements: (string | HTMLElement)[] = [], attr: { [key: string]: string | number | boolean }) => withAttributes(p(classNames, elements), attr)

export function Hero({ title, subtitle } : {title: string, subtitle: string}) {
    // const { title, subtitle } = props;
    const $title = p('title', title);

    $title.addEventListener('click', () => {
        $title.textContent +='!'
    })

    // $title.setAttribute('title', 'hello from title...')
    // $title.setAttribute('data-subtitle', '')

    const $titleWithAttr = withAttributes($title, { title: 'hello from title...', 'data-xyz': true })

    // Factory functions -> nowe DOM elementy
    return section('hero is-info', [
        div('hero-body', [
            $titleWithAttr,
            withAttributes(p('subtitle is-italic', subtitle), { title: 'hello from decorator'}),
            ///pWithAttributes('', [], {}),
            //p(['hero', 'is-info'], 'hello?')
        ])
    ])
}
