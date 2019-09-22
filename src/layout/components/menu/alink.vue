<script>
export default {
    name: 'alink',
    functional: true,
    props: {
        icon: String,
        className: {
            type: Array,
            default: () => []
        },
        title: {
            required: true,
            type: String
        }
    },
    render(h, context) {
        const { icon, title, className } = context.props
        let nodes = [];
        icon && nodes.push(<icon-svg name={icon} />);

        nodes.push(<span slot="title" class={className.join(' ')}>{title}</span>);

        return nodes;
    }
}
</script>