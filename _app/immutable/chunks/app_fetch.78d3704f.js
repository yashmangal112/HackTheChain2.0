const n = "https://backend.getlinked.ai",
    a = `${n}/hackathon`;
async function c(t, e = {}) {
    return e.headers || (e.headers = {}), e.headers["Content-Type"] = e.headers["Content-Type"] || "application/json", await fetch(`${a}/${t}`, e)
}
export {
    c as a
};