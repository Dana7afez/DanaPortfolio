"use client"
import { Award, Plus } from "lucide-react"

const ProfessionalCertificates = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <div className="flex flex-col items-center justify-center text-center py-12">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Professional Certificates</h3>
          <p className="text-gray-400 max-w-md mb-6">
            This section will showcase professional certifications and licenses. Check back soon for updates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[3/2] rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center bg-white/5"
              >
                <Plus className="w-8 h-8 text-white/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalCertificates
