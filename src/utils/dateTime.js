export default function timestampToDate(timestamp) {
    var t = timestamp ? new Date(parseInt(timestamp)) : new Date();
    var formatted = ('0' + t.getFullYear()).slice(-4) + '.' + ('0' + (t.getMonth()+1)).slice(-2) + '.' + ('0' + t.getDate()).slice(-2);

    return formatted;
}
