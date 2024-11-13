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
import {section, div, p} from "../builders/dom-builders";

export function Hero({ title, subtitle } : {title: string, subtitle: string}) {
    // const { title, subtitle } = props;
    const $title = p('title', [title]);

    $title.addEventListener('click', () => {
        $title.textContent +='!'
    })

    $title.setAttribute('title', 'hello from title...')
    $title.setAttribute('data-subtitle', '')

    // Factory functions -> nowe DOM elementy
    return section('hero is-info', [
        div('hero-body', [
            $title,
            p('subtitle is-italic', [subtitle])
        ])
    ])
}
