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

// dom-creators
const section = (classNames = '', elements: (string | HTMLElement)[] = []) => {
    const node = document.createElement('section');
    node.className = classNames;
    node.append(...elements);
    return node;
}
const div = (classNames = '', elements: (string | HTMLElement)[] = []) => {
    const node = document.createElement('div');
    node.className = classNames;
    node.append(...elements);
    return node;
}
const p = (classNames = '', elements: (string | HTMLElement)[] = []) => {
    const node = document.createElement('p');
    node.className = classNames;
    node.append(...elements);
    return node;
}

// Builder
export function Hero({ title, subtitle } : {title: string, subtitle: string}) {
    // const { title, subtitle } = props;

    // Factory functions -> nowe DOM elementy
    return section('hero is-info', [
        div('hero-body', [
            p('title', [title]),
            p('subtitle is-italic', [subtitle])
        ])
    ])
}
