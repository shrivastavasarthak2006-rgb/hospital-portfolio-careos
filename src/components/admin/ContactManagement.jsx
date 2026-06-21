import { Search, Trash2, Filter } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function ContactManagement({ contacts, setContacts, fetchPatients }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || contact.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this submission?");
    if (isConfirmed) {
      try {
        await axios.delete(`http://hospital-portfolio-backend.vercel.app/api/patients/${id}`);
        await fetchPatients();
      } catch (error) {
        console.error(error);
        alert("Failed to delete patient");
      }
    }
  };

  const handleResolve = async (id) => {
    try {
      await axios.put(`http://hospital-portfolio-backend.vercel.app/api/patients/${id}/resolve`);
      // refresh list from backend so status changes are reflected
      await fetchPatients();
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
    }
  };

  return (
    <section className="glass-card rounded-[2rem] p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-care-navy">Contact Management</h2>
          <p className="text-sm font-medium text-slate-500">Enterprise inquiries and partnership pipeline.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-slate-400">
            <Filter size={17} />
            <select 
              className="bg-transparent text-sm outline-none text-slate-600 font-medium cursor-pointer"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
              
            </select>
          </div>

          <div className="flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-slate-400">
            <Search size={17} />
            <input 
              className="w-44 bg-transparent text-sm outline-none" 
              placeholder="Search by name or email" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-3xl border border-slate-100 bg-white">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <div 
              key={contact._id} 
              className="grid items-center gap-3 border-b border-slate-100 p-4 last:border-b-0 sm:grid-cols-[1fr_1.2fr_0.8fr_0.8fr_auto_auto]"
            >
              <span className="font-bold text-care-navy">{contact.name}</span>
              <span className="text-sm font-medium text-slate-500 truncate pr-2">{contact.email}</span>
              <span className={`text-sm font-bold ${contact.status === "Resolved" ? "text-green-600" : "text-care-blue"}`}>
                {contact.status === "Resolved" ? "Resolved" : "Pending"}
              </span>
              <span className="text-sm font-semibold text-slate-500">{contact.city}</span>
              
              <button 
                onClick={() => handleDelete(contact._id)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                title="Delete submission"
              >
                <Trash2 size={16} />
              </button>

              <button
                onClick={() => handleResolve(contact._id)}
                disabled={contact.status === "Resolved"}
                className={`px-3 py-1 rounded-lg text-white text-sm transition-colors ${
                  contact.status === "Resolved"
                    ? "bg-green-600 cursor-not-allowed opacity-90"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {contact.status === "Resolved" ? "Resolved" : "Resolve"}
              </button>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-sm font-medium text-slate-500">
            No submissions found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
}



